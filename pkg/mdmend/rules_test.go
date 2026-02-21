package mdmend

import (
	"testing"
)

func TestAvailableRules(t *testing.T) {
	rules := AvailableRules()
	if len(rules) == 0 {
		t.Error("expected some available rules")
	}

	for _, r := range rules {
		if r.ID == "" {
			t.Error("rule ID should not be empty")
		}
		if r.Name == "" {
			t.Errorf("rule %s should have a name", r.ID)
		}
		if r.Description == "" {
			t.Errorf("rule %s should have a description", r.ID)
		}
	}
}

func TestRuleIDs(t *testing.T) {
	ids := RuleIDs()
	if len(ids) == 0 {
		t.Error("expected some rule IDs")
	}

	found := make(map[string]bool)
	for _, id := range ids {
		if found[id] {
			t.Errorf("duplicate rule ID: %s", id)
		}
		found[id] = true
	}
}

func TestGetRuleInfo(t *testing.T) {
	tests := []struct {
		id     string
		wantOK bool
	}{
		{"MD009", true},
		{"MD010", true},
		{"MD013", true},
		{"MD999", false},
		{"", false},
	}

	for _, tt := range tests {
		t.Run(tt.id, func(t *testing.T) {
			info, ok := GetRuleInfo(tt.id)
			if ok != tt.wantOK {
				t.Errorf("GetRuleInfo(%q) ok = %v, want %v", tt.id, ok, tt.wantOK)
				return
			}

			if tt.wantOK {
				if info.ID != tt.id {
					t.Errorf("info.ID = %q, want %q", info.ID, tt.id)
				}
				if info.Name == "" {
					t.Error("expected non-empty name")
				}
				if info.Description == "" {
					t.Error("expected non-empty description")
				}
			}
		})
	}
}

func TestGetRuleInfoKnownRules(t *testing.T) {
	knownRules := []struct {
		id      string
		fixable bool
	}{
		{"MD009", true},
		{"MD010", true},
		{"MD012", true},
		{"MD013", false},
		{"MD034", true},
		{"MD040", true},
		{"MD048", true},
	}

	for _, tt := range knownRules {
		t.Run(tt.id, func(t *testing.T) {
			info, ok := GetRuleInfo(tt.id)
			if !ok {
				t.Fatalf("expected rule %s to exist", tt.id)
			}

			if info.Fixable != tt.fixable {
				t.Errorf("rule %s Fixable = %v, want %v", tt.id, info.Fixable, tt.fixable)
			}
		})
	}
}

func TestEnabledRules(t *testing.T) {
	cfg := &Config{
		disable: []string{"MD013", "MD033"},
	}

	rules := EnabledRules(cfg)
	if len(rules) == 0 {
		t.Error("expected some enabled rules")
	}

	for _, r := range rules {
		if cfg.IsDisabled(r.ID) {
			t.Errorf("rule %s should be enabled", r.ID)
		}
	}
}

func TestEnabledRulesAllDisabled(t *testing.T) {
	allIDs := RuleIDs()
	cfg := &Config{
		disable: allIDs,
	}

	rules := EnabledRules(cfg)
	if len(rules) != 0 {
		t.Errorf("expected 0 enabled rules, got %d", len(rules))
	}
}

func TestFixableRules(t *testing.T) {
	cfg := DefaultConfig()
	rules := FixableRules(cfg)

	for _, r := range rules {
		if !r.Fixable {
			t.Errorf("rule %s should be fixable", r.ID)
		}
		if cfg.IsDisabled(r.ID) {
			t.Errorf("rule %s should be enabled", r.ID)
		}
	}
}

func TestRegisterRuleNil(t *testing.T) {
	err := RegisterRule(nil)
	if err == nil {
		t.Error("expected error for nil rule")
	}

	if !IsRuleError(err) {
		t.Errorf("expected RuleError, got %T", err)
	}
}

func TestRuleInfoStruct(t *testing.T) {
	info := RuleInfo{
		ID:          "TEST001",
		Name:        "test-rule",
		Description: "A test rule",
		Fixable:     true,
	}

	if info.ID != "TEST001" {
		t.Errorf("ID = %q, want 'TEST001'", info.ID)
	}
	if info.Name != "test-rule" {
		t.Errorf("Name = %q, want 'test-rule'", info.Name)
	}
	if info.Description != "A test rule" {
		t.Errorf("Description = %q, want 'A test rule'", info.Description)
	}
	if !info.Fixable {
		t.Error("expected Fixable to be true")
	}
}

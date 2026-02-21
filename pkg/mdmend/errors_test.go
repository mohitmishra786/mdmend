package mdmend

import (
	"errors"
	"os"
	"testing"
)

func TestPathError(t *testing.T) {
	err := &PathError{
		Op:   "read",
		Path: "/path/to/file.md",
		Err:  os.ErrNotExist,
	}

	if err.Error() != "read /path/to/file.md: file does not exist" {
		t.Errorf("unexpected error message: %s", err.Error())
	}

	if !errors.Is(err, os.ErrNotExist) {
		t.Error("expected Err to unwrap to os.ErrNotExist")
	}
}

func TestConfigError(t *testing.T) {
	tests := []struct {
		name string
		path string
		err  error
		want string
	}{
		{
			name: "with path",
			path: ".mdmend.yml",
			err:  ErrInvalidConfig,
			want: "config .mdmend.yml: invalid configuration",
		},
		{
			name: "without path",
			path: "",
			err:  ErrConfigNotFound,
			want: "config: config file not found",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := &ConfigError{Path: tt.path, Err: tt.err}
			if err.Error() != tt.want {
				t.Errorf("Error() = %q, want %q", err.Error(), tt.want)
			}
		})
	}
}

func TestRuleError(t *testing.T) {
	err := &RuleError{
		RuleID: "MD999",
		Err:    ErrRuleNotFound,
	}

	if err.Error() != "rule MD999: rule not found" {
		t.Errorf("unexpected error message: %s", err.Error())
	}

	if !errors.Is(err, ErrRuleNotFound) {
		t.Error("expected Err to unwrap to ErrRuleNotFound")
	}
}

func TestNewPathError(t *testing.T) {
	err := NewPathError("write", "/tmp/test.md", os.ErrPermission)
	if err.Op != "write" {
		t.Errorf("Op = %q, want 'write'", err.Op)
	}
	if err.Path != "/tmp/test.md" {
		t.Errorf("Path = %q, want '/tmp/test.md'", err.Path)
	}
}

func TestNewConfigError(t *testing.T) {
	err := NewConfigError(".mdmend.yml", ErrInvalidConfig)
	if err.Path != ".mdmend.yml" {
		t.Errorf("Path = %q, want '.mdmend.yml'", err.Path)
	}
}

func TestNewRuleError(t *testing.T) {
	err := NewRuleError("MD040", ErrRuleNotFound)
	if err.RuleID != "MD040" {
		t.Errorf("RuleID = %q, want 'MD040'", err.RuleID)
	}
}

func TestIsPathError(t *testing.T) {
	pathErr := NewPathError("read", "test.md", os.ErrNotExist)
	if !IsPathError(pathErr) {
		t.Error("expected IsPathError to return true")
	}

	otherErr := errors.New("some error")
	if IsPathError(otherErr) {
		t.Error("expected IsPathError to return false for non-PathError")
	}
}

func TestIsConfigError(t *testing.T) {
	configErr := NewConfigError(".mdmend.yml", ErrInvalidConfig)
	if !IsConfigError(configErr) {
		t.Error("expected IsConfigError to return true")
	}

	otherErr := errors.New("some error")
	if IsConfigError(otherErr) {
		t.Error("expected IsConfigError to return false for non-ConfigError")
	}
}

func TestIsRuleError(t *testing.T) {
	ruleErr := NewRuleError("MD040", ErrRuleNotFound)
	if !IsRuleError(ruleErr) {
		t.Error("expected IsRuleError to return true")
	}

	otherErr := errors.New("some error")
	if IsRuleError(otherErr) {
		t.Error("expected IsRuleError to return false for non-RuleError")
	}
}

func TestWrapReadError(t *testing.T) {
	err := WrapReadError("/path/to/file.md", os.ErrPermission)

	if !IsPathError(err) {
		t.Error("expected PathError")
	}

	var pathErr *PathError
	if !errors.As(err, &pathErr) {
		t.Error("expected to be able to unwrap to PathError")
	}

	if pathErr.Op != "read" {
		t.Errorf("Op = %q, want 'read'", pathErr.Op)
	}
}

func TestWrapWriteError(t *testing.T) {
	err := WrapWriteError("/path/to/file.md", os.ErrPermission)

	if !IsPathError(err) {
		t.Error("expected PathError")
	}

	var pathErr *PathError
	if !errors.As(err, &pathErr) {
		t.Error("expected to be able to unwrap to PathError")
	}

	if pathErr.Op != "write" {
		t.Errorf("Op = %q, want 'write'", pathErr.Op)
	}
}

func TestErrorConstants(t *testing.T) {
	tests := []struct {
		name string
		err  error
		want string
	}{
		{"ErrInvalidPath", ErrInvalidPath, "invalid path"},
		{"ErrFileNotFound", ErrFileNotFound, "file not found"},
		{"ErrReadFailed", ErrReadFailed, "failed to read file"},
		{"ErrWriteFailed", ErrWriteFailed, "failed to write file"},
		{"ErrInvalidConfig", ErrInvalidConfig, "invalid configuration"},
		{"ErrConfigNotFound", ErrConfigNotFound, "config file not found"},
		{"ErrNoInput", ErrNoInput, "no input provided"},
		{"ErrRuleNotFound", ErrRuleNotFound, "rule not found"},
		{"ErrRuleRegistered", ErrRuleRegistered, "rule already registered"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if tt.err.Error() != tt.want {
				t.Errorf("error message = %q, want %q", tt.err.Error(), tt.want)
			}
		})
	}
}

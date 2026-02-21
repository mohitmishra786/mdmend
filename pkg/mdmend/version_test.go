package mdmend

import (
	"strings"
	"testing"
)

func TestGetVersion(t *testing.T) {
	v := GetVersion()
	if v == "" {
		t.Error("expected non-empty version")
	}
}

func TestGetCommit(t *testing.T) {
	c := GetCommit()
	if c == "" {
		t.Error("expected non-empty commit")
	}
}

func TestGetBuildDate(t *testing.T) {
	d := GetBuildDate()
	if d == "" {
		t.Error("expected non-empty build date")
	}
}

func TestVersionInfo(t *testing.T) {
	info := VersionInfo()
	if info == "" {
		t.Error("expected non-empty version info")
	}

	if !strings.Contains(info, "mdmend") {
		t.Error("expected version info to contain 'mdmend'")
	}

	if !strings.Contains(info, GetVersion()) {
		t.Error("expected version info to contain version")
	}

	if !strings.Contains(info, GetCommit()) {
		t.Error("expected version info to contain commit")
	}

	if !strings.Contains(info, GetBuildDate()) {
		t.Error("expected version info to contain date")
	}
}

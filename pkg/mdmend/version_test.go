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

	if !strings.Contains(info, Version) {
		t.Error("expected version info to contain version")
	}

	if !strings.Contains(info, Commit) {
		t.Error("expected version info to contain commit")
	}

	if !strings.Contains(info, Date) {
		t.Error("expected version info to contain date")
	}
}

func TestVersionVariables(t *testing.T) {
	if Version == "" {
		t.Error("Version should not be empty")
	}

	if Commit == "" {
		t.Error("Commit should not be empty")
	}

	if Date == "" {
		t.Error("Date should not be empty")
	}
}

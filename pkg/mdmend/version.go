package mdmend

var (
	Version = "dev"
	Commit  = "none"
	Date    = "unknown"
)

func GetVersion() string {
	return Version
}

func GetCommit() string {
	return Commit
}

func GetBuildDate() string {
	return Date
}

func VersionInfo() string {
	return "mdmend " + Version + " (commit: " + Commit + ", built: " + Date + ")"
}

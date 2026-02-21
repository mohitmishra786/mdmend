package mdmend

var (
	version = "dev"
	commit  = "none"
	date    = "unknown"
)

func GetVersion() string {
	return version
}

func GetCommit() string {
	return commit
}

func GetBuildDate() string {
	return date
}

func VersionInfo() string {
	return "mdmend " + version + " (commit: " + commit + ", built: " + date + ")"
}

package mdmend

// These variables are intended to be overridden at build time using -ldflags.
//
//	Example: go build -ldflags="-X 'github.com/mohitmishra786/mdmend/pkg/mdmend.version=1.0.0' \
//	  -X 'github.com/mohitmishra786/mdmend/pkg/mdmend.commit=abc123' \
//	  -X 'github.com/mohitmishra786/mdmend/pkg/mdmend.date=2024-01-01'"
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

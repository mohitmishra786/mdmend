class Mdmend < Formula
  desc "Fast Markdown linter and fixer"
  homepage "https://github.com/mohitmishra786/mdmend"
  version "1.0.0"
  license "MIT"
  head "https://github.com/mohitmishra786/mdmend.git", branch: "main"

  livecheck do
    url :stable
    strategy :github_latest
  end

  on_macos do
    on_intel do
      url "https://github.com/mohitmishra786/mdmend/releases/download/v#{version}/mdmend_#{version}_darwin_amd64.tar.gz"
      sha256 "REPLACE_WITH_ACTUAL_SHA256"
    end
    on_arm do
      url "https://github.com/mohitmishra786/mdmend/releases/download/v#{version}/mdmend_#{version}_darwin_arm64.tar.gz"
      sha256 "REPLACE_WITH_ACTUAL_SHA256"
    end
  end

  on_linux do
    on_intel do
      url "https://github.com/mohitmishra786/mdmend/releases/download/v#{version}/mdmend_#{version}_linux_amd64.tar.gz"
      sha256 "REPLACE_WITH_ACTUAL_SHA256"
    end
    on_arm do
      url "https://github.com/mohitmishra786/mdmend/releases/download/v#{version}/mdmend_#{version}_linux_arm64.tar.gz"
      sha256 "REPLACE_WITH_ACTUAL_SHA256"
    end
  end

  def install
    bin.install "mdmend"
    
    # Generate shell completions
    generate_completions_from_executable(bin/"mdmend", "completion")
  end

  test do
    # Test version flag - match actual output format
    assert_match(/mdmend\s+/, shell_output("#{bin}/mdmend --version"))

    # Test lint command
    test_file = testpath/"test.md"
    test_file.write "# Test\n\nHello\tWorld\n"
    
    output = shell_output("#{bin}/mdmend lint #{test_file}", 1)
    assert_match "MD010", output

    # Test fix command
    output = shell_output("#{bin}/mdmend fix --dry-run #{test_file}")
    assert_match "MD010", output
  end

  # NOTE: The sha256 values above are placeholders and must be updated 
  # with actual checksums for each release. Compute them using:
  #   curl -sL https://github.com/mohitmishra786/mdmend/releases/download/v1.0.0/checksums.txt
  # Or download the tarball and run:
  #   shasum -a 256 mdmend_1.0.0_*.tar.gz
end

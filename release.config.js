/**
 * @type {import("semantic-release").GlobalConfig}
 */
module.exports = {
    branches: [ "trunk" ],
    repositoryUrl: "https://github.com/efleming969/semiver-v1",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/npm",
        "@semantic-release/git",
        "@semantic-release/github"
    ]
}

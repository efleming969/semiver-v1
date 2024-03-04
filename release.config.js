/**
 * @type {import("semantic-release").GlobalConfig}
 */
module.exports = {
    branches: [ "trunk" ],
    repositoryUrl: "https://github.com/efleming969/semrel-example",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        "@semantic-release/git",
        "@semantic-release/github"
    ]
}

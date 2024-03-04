/**
 * @type {import("semantic-release").GlobalConfig}
 */
module.exports = {
    branches: [ "trunk" ],
    repositoryUrl: "https://github.com/efleming969/semrel-example",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        '@semantic-release/changelog',
        [
            'semantic-release-replace-plugin',
            {
                replacements: [
                    {
                        files: ['package.json'],
                        from: '"version": ".*"',
                        to: '"version": "${nextRelease.version}"',
                    },
                    {
                        files: [
                            'package.json'
                        ],
                        from: '"version": ".*"',
                        to: '"version": "${nextRelease.version}"',
                    },
                ],
            },
        ],
        "@semantic-release/npm",
        [
            '@semantic-release/git',
            {
                message: 'chore(changelog): ${nextRelease.version}',
                assets: [
                    'CHANGELOG.md',
                    'package.json',
                ],
            },
        ],
        [
        '@semantic-release/exec', {
                publishCmd: 'npm publish',
            },
        ],
    ]
}

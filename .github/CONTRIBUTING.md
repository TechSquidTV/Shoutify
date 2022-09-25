# Contributing to Shoutify

Thank you for your interest in becoming a contributor to Shoutify. We welcome
all contributions, no matter how large or small. Please take a moment to review
this document in order to make effective contributions.

- [Have a Question?](#question)
- [Issues and Bugs](#issue)
- [Feature Requests](#feature)
- [Contributing](#contribute)
  - [Submission Guidelines](#guidelines)
  - [Release Process](#release)
  - [FAQ](#FAQ)

## <a name="question"></a>Have a Question?

Have a question about Shoutify? Ask questions or feel free to talk about
anything Shoutify related in our
[GitHub Discussions forum](https://github.com/TechSquidTV/Shoutify/discussions).

## <a name="issue"></a>Discover a Bug?

Something not working as expected? Let's see if we can work together to get it
resolved. If you believe you have discovered a bug, please open an issue on the
GitHub repository and select the "Bug Report" template.

[Open an issue](https://github.com/TechSquidTV/Shoutify/issues/new/choose)

## <a name="feature"></a>Missing Feature?

Would you like to see a new feature added to Shoutify? Let's discuss it! All
features for Shoutify should begin as an Issue on the GitHub repository. Select
the "Feature Request" issue template and engage with the community to come to a
collective solution to the feature request.

[Create a Feature Request](https://github.com/TechSquidTV/Shoutify/issues/new/choose)

## <a name="contribute"></a>Contributing

Want to contribute to Shoutify? Great! We welcome all contributions no matter
how large or small. Please begin by taking a look at the open issues and get
involved in the conversation. We would be happy to assign you to an issue and
help you get started.

Get started by reading the [HACKING.md](./HACKING.md) document, and come back here when you're ready to submit.

### <a name="guidelines"></a>Submission Guidelines

#### <a name="commit"></a>Commit Conventions

This project strictly adheres to the
[conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
specification for creating human readable commit messages with appropriate
automation capabilities, such as changelog generation.

##### Commit Message Format

Each commit message consists of a header, a body and a footer. The header has a
special format that includes a type, a scope and a subject:

```text
<type>(optional <scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Footer should contain a
[closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/)
if any.

##### Breaking Change

Append a `!` to the end of the `type` in your commit message to suggest a
`BREAKING CHANGE`

```
<type>!(optional <scope>): <subject>
```

##### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies
  (example scopes: npm, eslint, prettier)
- **ci**: Changes to our CircleCI configuration
- **chore**: No production code changes. Updates to readmes and meta documents
- **docs**: Changes to the automated documentation or TSDoc comments
- **feat**: A new feature
- **fix**: A bug fix
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space,
  formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
- **sample**: A change to the samples

#### <a name="pull"></a>Submitting a Pull Request

After searching for potentially existing pull requests or issues in progress, if
none are found, please open a new issue describing your intended changes and
stating your intention to work on the issue.

Creating issues helps us plan our next release and prevents folks from
duplicating work.

After the issue has been created, follow these steps to create a Pull Request.

1. Fork the [TechSquidTV/Shoutify](https://github.com/TechSquidTV/Shoutify)
   repo.
1. Clone your newly forked repository to your local machine.
1. Create a new branch for your changes: `git checkout -b fix/my-issue main`
1. Run `npm install`
1. Implement your change with appropriate test coverage.
1. Utilize our [commit message conventions](commit).
1. Push all changes back to GitHub `git push origin fix/my-issue`
1. In GitHub, send a Pull Request to `shoutify:main`

Thank you for your contribution!

##### After Your PR Has Been Merged

After your pull request is merged, you can safely delete your branch and pull
the changes from the main (upstream) repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your
  local shell as follows:

  ```shell
  git push origin --delete fix/my-issue
  ```

- Check out the main branch:

  ```shell
  git checkout main -f
  ```

- Delete the local branch:

  ```shell
  git branch -D fix/my-issue
  ```

- Update your main with the latest upstream version:

  ```shell
  git pull --ff upstream main
  ```

#### <a name="release"></a>How To Issue a Release

_For maintainers only_

_This is subject to change_

When it is time to release a new version, follow the following steps.

1. Ensure all relevant PRs have been merged into the `main` branch, awaiting
   "deployment".
1. Review the commit history to determine the release type (major, minor, patch)
1. On GitHub,
   [create a new Release](https://github.com/CircleCI-Public/circleci-config-sdk-ts/releases/new)
   with the `main` branch as the target and specify the version number.
1. Include the automatically generated release notes in the release description.

#### <a name="FAQ"></a>FAQ

##### Q. Why does my commit fail?

**A.** This project makes use of git commit hooks to automate pre-checking commits by linting, testing, and running prettier. If you would like to bypass these checks locally temporarily to save progress, ensure to add the `--no-verify` flag to your commit message.

**A.** Want the hooks enabled but they are still failing? Check to ensure you are using the right version of NodeJS but running `nvm use` in the directory.

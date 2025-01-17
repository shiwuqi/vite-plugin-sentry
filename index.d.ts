import type { Plugin } from 'vite'

/*
  Common types
*/

import type {
  SentryCliCommitsOptions,
  SentryCliUploadSourceMapsOptions,
  SentryCliNewDeployOptions
} from '@sentry/cli'

/*
    Plugin input options
*/
export interface ViteSentryPluginOptions {

  /*
    Show debug messages during run
  */
  debug?: boolean

  /*
    Force enable sourcemaps uploading
  */
  skipEnvironmentCheck?: boolean

  /*
    Dry run mode
  */
  dryRun?: boolean

  /*
    Remove all artifacts in the release befire upload
  */
  cleanArtifacts?: boolean

  /*
    Url of sentry installation
  */
  url?: string

  /*
    Authentication token for API
  */
  authToken?: string

  /*
    Organization slug
  */
  org?: string

  /*
    Project slug
  */
  project?: string

  /*
    VCS remote name
  */
  vcsRemote?: string

  /*
    Path to sentry cli config file
  */
  configFile?: string

  /*
    Unique name for release
    defaults to sentry-cli releases propose version (requires access to GIT and root directory to be repo)
  */
  release?: string

  /*
    Determines whether processed release should be automatically finalized after artifacts upload
  */
  finalize?: boolean

  /*
    If true, all sentry-cli logs are suppressed
  */
  silent?: boolean

  /*
    Deployment settings
  */
  deploy?: SentryCliNewDeployOptions

  /*
    Source maps settings
  */
  sourceMaps: SentryCliUploadSourceMapsOptions

  /*
    Commits settings
  */
  setCommits?: SentryCliCommitsOptions
}

/*
  Vite plugin function declaration
*/
export default function (options: ViteSentryPluginOptions): Plugin

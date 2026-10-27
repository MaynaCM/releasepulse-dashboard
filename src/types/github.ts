export interface GitHubWorkflowRunsResponse {
  total_count: number
  workflow_runs: GitHubWorkflowRun[]
}

export interface GitHubWorkflowRun {
  id: number
  name: string
  run_started_at: string
  status: GitHubRunStatus | null
  conclusion: GitHubRunConclusion | null
  html_url: string
  head_branch: string | null
  event: string
  created_at: string
  updated_at: string
}

export type GitHubRunStatus =
  | 'queued'
  | 'requested'
  | 'in_progress'
  | 'waiting'
  | 'pending'
  | 'completed'
 
export type GitHubRunConclusion =
    | 'success'
    | 'failure'
    | 'neutral'
    | 'cancelled'
    | 'skipped'
    | 'timed_out'
    | 'action_required'
    | 'stale'
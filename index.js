import { strict } from "assert";

const request = await (
  await fetch("https://api.github.com/users/caioagiani")
).json();

const expectedProfile = {
  login: "caioagiani",
  id: 56451511,
  node_id: "MDQ6VXNlcjU2NDUxNTEx",
  avatar_url: "https://avatars.githubusercontent.com/u/56451511?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/caioagiani",
  html_url: "https://github.com/caioagiani",
  followers_url: "https://api.github.com/users/caioagiani/followers",
  following_url:
    "https://api.github.com/users/caioagiani/following{/other_user}",
  gists_url: "https://api.github.com/users/caioagiani/gists{/gist_id}",
  starred_url: "https://api.github.com/users/caioagiani/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/caioagiani/subscriptions",
  organizations_url: "https://api.github.com/users/caioagiani/orgs",
  repos_url: "https://api.github.com/users/caioagiani/repos",
  events_url: "https://api.github.com/users/caioagiani/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/caioagiani/received_events",
  type: "User",
  site_admin: false,
  name: "Caio Agiani",
  company: "Mobizon | Levante",
  blog: "https://www.linkedin.com/in/caioagiani",
  location: "SP",
  email: null,
  hireable: null,
  bio: "import { caioagiani } from 'github/profile';",
  twitter_username: "caioagiani",
  public_repos: 48,
  public_gists: 13,
  followers: 2119,
  following: 620,
  created_at: "2019-10-11T17:56:51Z",
  updated_at: "2022-03-02T00:01:13Z",
};

strict.deepEqual(request, expectedProfile);

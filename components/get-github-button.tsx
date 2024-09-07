import Link from "next/link";

export default function GetOnGithubButton() {
  return (
    <>
      <Link
        href="https://github.com/ferdezjuani/unlaunched-saas-boilerplate"
        target="_blank"
      >
        <button className="btn btn-secondary">Get on Github</button>
      </Link>
    </>
  );
}

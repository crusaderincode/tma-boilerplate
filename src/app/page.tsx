"use client";

import { Button } from "@/components/ui";
import { useLaunchParams } from "@tma.js/sdk-react";


export default function Home() {
  const lp = useLaunchParams()

  return (
			<div className="flex flex-col items-center justify-center p-2 text-lg text-center gap-y-3">
				<h1 className="text-4xl font-bold">Welcome, builder!</h1>
				<p className="">This is a simple home page for your application.</p>
				<p className="mb-2">
					If you like this project, <br /> don't forget to ⭐ it on {" "}
					<a
						href="https://github.com/your-username/your-repo"
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						GitHub
					</a>
					!
				</p>
				<Button onClick={() => console.log(lp)}>Check init data</Button>
			</div>
		)
}

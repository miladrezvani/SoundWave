import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

const Player = () => {
  return (
    <Card
      className="flex flex-box flex-col border py-0 w-64"
      // style={{ background: "linear-gradient(#ffffff, #3d3d3d)" }}
    >
      <img src="/src/assets/react.svg"></img>
      <CardHeader className="justify-items-center">
        <CardTitle>Music Name</CardTitle>
        <CardDescription>Artist Name</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-box flex-row justify-center gap-10">
          <Button size="icon-lg" variant="ghost" className="rounded-full">
            &lt;
          </Button>
          <Button size="icon-lg" variant="outline" className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </Button>
          <Button size="icon-lg" variant="ghost" className="rounded-full">
            &gt;
          </Button>
        </div>
        <Progress value={33} className={"mt-5 h-1"} />
        <div className="flex justify-between text-sm mt-1">
          <p>1:02</p>
          <p>3:52</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button size="icon-sm" variant="ghost" className="rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
        </Button>
        <Button size="icon-sm" variant="ghost" className="rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Player;

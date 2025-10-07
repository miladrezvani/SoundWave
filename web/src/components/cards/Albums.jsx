import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Albums = () => {
  return (
    <Card className="py-2 w-121 overflow-y-auto h-120 gap-0">
      <Input type="search" placeholder="search" className="mb-2 w-40 mx-auto" />
      <div className="flex flex-row">
        <Button
          variant="ghost"
          className="flex flex-box flex-col h-40 w-40 justify-end items-center relative"
        >
          <img className="absolute h-40 w-40" src="/src/assets/react.svg"></img>
          <p className="z-50">album name</p>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-box flex-col h-40 w-40 justify-end items-center relative"
        >
          <img className="absolute h-40 w-40" src="/src/assets/react.svg"></img>
          <p className="z-50">album name</p>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-box flex-col h-40 w-40 justify-end items-center relative"
        >
          <img className="absolute h-40 w-40" src="/src/assets/react.svg"></img>
          <p className="z-50">album name</p>
        </Button>
      </div>
      <div className="flex flex-row">
        <Button
          variant="ghost"
          className="flex flex-box flex-col h-40 w-40 justify-end items-center relative"
        >
          <img className="absolute h-40 w-40" src="/src/assets/react.svg"></img>
          <p className="z-50">album name</p>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-box flex-col h-40 w-40 justify-end items-center relative"
        >
          <img className="absolute h-40 w-40" src="/src/assets/react.svg"></img>
          <p className="z-50">album name</p>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-box flex-col h-40 w-40 justify-end items-center relative"
        >
          <img className="absolute h-40 w-40" src="/src/assets/react.svg"></img>
          <p className="z-50">album name</p>
        </Button>
      </div>
      <div className="flex flex-row">
        <Button
          variant="ghost"
          className="flex flex-box flex-col h-40 w-40 justify-end items-center relative"
        >
          <img className="absolute h-40 w-40" src="/src/assets/react.svg"></img>
          <p className="z-50">album name</p>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-box flex-col h-40 w-40 justify-end items-center relative"
        >
          <img className="absolute h-40 w-40" src="/src/assets/react.svg"></img>
          <p className="z-50">album name</p>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-box flex-col h-40 w-40 justify-end items-center relative"
        >
          <img className="absolute h-40 w-40" src="/src/assets/react.svg"></img>
          <p className="z-50">album name</p>
        </Button>
      </div>
      <div className="flex flex-row">
        <Button
          variant="ghost"
          className="flex flex-box flex-col h-40 w-40 justify-end items-center relative"
        >
          <img className="absolute h-40 w-40" src="/src/assets/react.svg"></img>
          <p className="z-50">album name</p>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-box flex-col h-40 w-40 justify-end items-center relative"
        >
          <img className="absolute h-40 w-40" src="/src/assets/react.svg"></img>
          <p className="z-50">album name</p>
        </Button>
        <Button
          variant="ghost"
          className="flex flex-box flex-col h-40 w-40 justify-end items-center relative"
        >
          <img className="absolute h-40 w-40" src="/src/assets/react.svg"></img>
          <p className="z-50">album name</p>
        </Button>
      </div>
    </Card>
  );
};

export default Albums;

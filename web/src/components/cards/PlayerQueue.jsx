import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Separator } from "../ui/separator";

const PlayerQueue = () => {
  return (
    <Card className="border w-64 py-4 overflow-y-auto h-90">
      <CardHeader className="flex flex-row">
        <CardTitle className="my-auto">1</CardTitle>
        <Separator orientation="vertical" />
        <div className="flex flex-box flex-col">
          <CardTitle>brono</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </div>
      </CardHeader>
      <Separator className="data-[orientation=horizontal]:w-auto mx-5" />
      <CardHeader className="flex flex-row">
        <CardTitle className="my-auto">2</CardTitle>
        <Separator orientation="vertical" />
        <div className="flex flex-box flex-col">
          <CardTitle>brono</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </div>
      </CardHeader>
      <Separator className="data-[orientation=horizontal]:w-auto mx-5" />
      <CardHeader className="flex flex-row">
        <CardTitle className="my-auto">3</CardTitle>
        <Separator orientation="vertical" />
        <div className="flex flex-box flex-col">
          <CardTitle>brono</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </div>
      </CardHeader>
      <Separator className="data-[orientation=horizontal]:w-auto mx-5" />
      <CardHeader className="flex flex-row">
        <CardTitle className="my-auto">4</CardTitle>
        <Separator orientation="vertical" />
        <div className="flex flex-box flex-col">
          <CardTitle>brono</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </div>
      </CardHeader>
      <Separator className="data-[orientation=horizontal]:w-auto mx-5" />
      <CardHeader className="flex flex-row">
        <CardTitle className="my-auto">5</CardTitle>
        <Separator orientation="vertical" />
        <div className="flex flex-box flex-col">
          <CardTitle>brono</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </div>
      </CardHeader>
      <Separator className="data-[orientation=horizontal]:w-auto mx-5" />
      <CardHeader className="flex flex-row">
        <CardTitle className="my-auto">6</CardTitle>
        <Separator orientation="vertical" />
        <div className="flex flex-box flex-col">
          <CardTitle>brono</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </div>
      </CardHeader>
      <Separator className="data-[orientation=horizontal]:w-auto mx-5" />
      <CardHeader className="flex flex-row">
        <CardTitle className="my-auto">7</CardTitle>
        <Separator orientation="vertical" />
        <div className="flex flex-box flex-col">
          <CardTitle>brono</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </div>
      </CardHeader>
      <Separator className="data-[orientation=horizontal]:w-auto mx-5" />
    </Card>
  );
};

export default PlayerQueue;

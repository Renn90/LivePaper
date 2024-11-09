"use client";
import Header from "@/app/components/header";
import { Editor } from "@/app/editor/Editor";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ClientSideSuspense, RoomProvider } from "@liveblocks/react/suspense";
import React, { ReactNode } from "react";
import Loader from "./Loader";
import ActiveCollaborators from "./ActiveCollaborators";

const CollaborativeRoom = ({roomId, roomMetadata}: CollaborativeRoomProps) => {
  return (
    <RoomProvider id={roomId}>
      <ClientSideSuspense fallback={<Loader />}>
        <div className="collaborative-room">
          <Header>
            <div>
              <h1>This is a fake title</h1>
            </div>
            <div className="flex items-center w-full flex-1 justify-end gap-3">
              <ActiveCollaborators />
              <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </div>
          </Header>
          <Editor />
        </div>
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default CollaborativeRoom;

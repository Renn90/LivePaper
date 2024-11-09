import React from "react";
import Header from "../components/header";
import Image from "next/image";
import bell from "@/public/assets/icons/bell.svg";
import doc from "@/public/assets/images/doc.png";
import docIcon from "@/public/assets/icons/doc.svg";
import bin from "@/public/assets/icons/delete.svg";
import { IoSearch } from "react-icons/io5";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AddDocumentBtn from "../components/AddDocumentBtn";

const page = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");
  const documents = [];
  return (
    <div className="container">
      <div className="fixed w-full">
      <Header>
        <div className="flex items-center">
          <IoSearch className="mr-4 w-[16px]" />
          <Image src={bell} alt="bell icon" className="mr-4 w-[16px]" />
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </Header>
      </div>
      {documents.length < 1 ? (
        <div className="h-screen w-full flex flex-col items-center justify-center">
          <Image
            src={docIcon}
            alt="icon for doc"
            width={80}
            className="bg-dim p-2 my-2 rounded-md"
          />
          <h3 className="text-xl my-2 mb-4">
            You have not collaborated on any documents
          </h3>
          <AddDocumentBtn
            userId={clerkUser.id}
            email={clerkUser.emailAddresses[0].emailAddress}
          />
        </div>
      ) : (
        <div className="mt-4 max-w-[750px] mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">All Documents</h1>
            <AddDocumentBtn
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
          <div className="relative mt-6">
            <Image
              src={doc}
              alt="doc bg"
              className="w-full absolute top-0 rounded max-h-[80px]"
            />
            <div className="flex items-center justify-between h-[77px] z-[99] p-2">
              <div className="z-[99] flex items-center">
                <Image
                  src={docIcon}
                  alt="icon for doc"
                  className="bg-dim p-2 rounded-md"
                />
                <div className="ml-3">
                  <h2 className="text-lg">Test title</h2>
                  <p className="text-base text-dim">Created about 2mins</p>
                </div>
              </div>
              <Image src={bin} alt="icon for bin" className="z-[99]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;

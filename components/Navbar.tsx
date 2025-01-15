import Link from "next/link";
import { useRouter } from "next/router";

/* eslint-disable @next/next/no-img-element */
const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full h-[10vh] border-b border-white/[.13] border-solid flex justify-between items-center fixed z-20 bg-primary">
      <img
        src="./images/Logo 2.png"
        alt="Logo"
        className="ml-4 cursor-pointer h-full"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
        onClick={async () => {
          router.pathname !== "/" && (await router.push("/"));
          document.body.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
      />
      <div className="flex items-center justify-center gap-8">
        <p
          onClick={async () => {
            router.pathname !== "/" && (await router.push("/"));
            document.body.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Home
        </p>
        <p
          onClick={async () => {
            router.pathname !== "/#aboutus" && (await router.push("/#aboutus"));
            let element = document.getElementById("aboutus");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          About Us
        </p>
        <Link href="/events">
          <p
            // onClick={async () => {
            //   router.pathname !== "/index" && (await router.push("/index"));
            //   let element = document.getElementById("events");
            //   element?.scrollIntoView({ behavior: "smooth", block: "start" });
            // }}
            className="hidden text-white cursor-pointer select-none sm:block"
          >
            Events
          </p>
        </Link>
        {/* <p
          onClick={async () => {
            router.pathname !== "/index#themes" && (await router.push("/index#themes"));
            // let element = document.getElementById("themes");
            // element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Themes
        </p> */}
        <p
          onClick={() => { window.open("brochure25", "_blank") }}
          className="hidden text-white cursor-pointer select-none sm:block"  >
          Brochure
        </p>

        <p
          onClick={async () => {
            router.pathname !== "/#rules" && (await router.push("/#rules"));
            let element = document.getElementById("rules");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Rules
        </p>

        
        <p
          onClick={async () => {
            router.pathname !== "/#practicequestions" && (await router.push("/#practicequestions"));
            let element = document.getElementById("rules");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Questions
        </p>

        <p
          onClick={async () => {
            router.pathname !== "/#prizes" && (await router.push("/#prizes"));
            // let element = document.getElementById("prizes");
            // element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          Prizes
        </p>
        {/* <p
          onClick={async () => {
            router.pathname !== "/index" && (await router.push("/index"));
            let element = document.getElementById("faqs");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="hidden text-white cursor-pointer select-none sm:block"
        >
          FAQs
        </p> */}

{/* 
        <p
          onClick={async () => {
            router.pathname !== "/#aboutus" && (await router.push("/#aboutus"));
            let element = document.getElementById("aboutus");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }} className="hidden text-white cursor-pointer select-none sm:block"  >
          Contact Us
        </p>
         */}
        <p
          onClick={async () => {
            router.pathname !== "/#schedule" && (await router.push("/#schedule"));
            let element = document.getElementById("aboutus");
            element?.scrollIntoView({ behavior: "smooth", block: "start" });
          }} className="hidden text-white cursor-pointer select-none sm:block"  >
          Schedule
        </p>

        <div
          onClick={() => { window.open("newform25", "_blank") }}
          className="hidden sm:block px-6 py-2 mr-8 rounded-full cursor-pointer sm:mr-12 bg-gradient-to-b from-gradientTop to-gradientBottom"
        >
          Registrations Open
        </div>
      </div>
    </div>
  );
};

export default Navbar;

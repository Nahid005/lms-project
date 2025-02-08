import React from "react";
import Navbar from "@/components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Link from "next/link";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import SubscribeForm from "../components/Common/SubscribeForm";
import Footer from "@/components/_App/Footer";

export default function FAQPage({ user }) {
  return (
    <>
      <Navbar user={user} />

      <PageBanner
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="FAQ's"
      />

      <div className="faq-area ptb-100 min-vh-100">
        <div className="container">
          <div className="faq-accordion">
            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                  আমি কিভাবে সরাসরি একটি স্কুলের সাথে যোগাযোগ করতে পারি?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  আপনি একটি পূরণ করে একটি স্কুলের সাথে যোগাযোগ করতে পারেন {" "}
                    <Link href="/contact-us">
                      <a>“ যোগাযোগ করুন ”</a>
                    </Link>{" "}
                    ফর্ম এই ফর্মটি উভয়ের ডানদিকে পাওয়া যাবে
                    ইনস্টিটিউট এবং শিক্ষা প্রোগ্রাম প্রোফাইল এবং এছাড়াও
                    এই প্রোফাইলের নীচে।
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                  আমি বিদেশে কোথায় পড়াশোনা করব?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                  আপনি একটি পূরণ করে একটি স্কুলের সাথে যোগাযোগ করতে পারেন {" "}
                    <Link href="/contact-us">
                      <a>“ যোগাযোগ করুন ”</a>
                    </Link>{" "}
                    ফর্ম এই ফর্মটি উভয়ের ডানদিকে পাওয়া যাবে
                    ইনস্টিটিউট এবং শিক্ষা প্রোগ্রাম প্রোফাইল এবং এছাড়াও
                    এই প্রোফাইলের নীচে।
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                  আমি কিভাবে Prottoy Academy এ বিদেশে অধ্যয়নের প্রোগ্রাম খুঁজে পাব?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                  আপনি একটি পূরণ করে একটি স্কুলের সাথে যোগাযোগ করতে পারেন {" "}
                    <Link href="/contact-us">
                      <a>“ যোগাযোগ করুন ”</a>
                    </Link>{" "}
                    ফর্ম এই ফর্মটি উভয়ের ডানদিকে পাওয়া যাবে
                    ইনস্টিটিউট এবং শিক্ষা প্রোগ্রাম প্রোফাইল এবং এছাড়াও
                    এই প্রোফাইলের নীচে।
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                  আমি কীভাবে একটি স্কুল খুঁজে পাব যেখানে আমি পড়তে চাই?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                  আপনি একটি পূরণ করে একটি স্কুলের সাথে যোগাযোগ করতে পারেন {" "}
                    <Link href="/contact-us">
                      <a>“ যোগাযোগ করুন ”</a>
                    </Link>{" "}
                    ফর্ম এই ফর্মটি উভয়ের ডানদিকে পাওয়া যাবে
                    ইনস্টিটিউট এবং শিক্ষা প্রোগ্রাম প্রোফাইল এবং এছাড়াও
                    এই প্রোফাইলের নীচে।
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                  আমি কি ভর্তির যোগ্য?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                  আপনি একটি পূরণ করে একটি স্কুলের সাথে যোগাযোগ করতে পারেন {" "}
                    <Link href="/contact-us">
                      <a>“ যোগাযোগ করুন ”</a>
                    </Link>{" "}
                    ফর্ম এই ফর্মটি উভয়ের ডানদিকে পাওয়া যাবে
                    ইনস্টিটিউট এবং শিক্ষা প্রোগ্রাম প্রোফাইল এবং এছাড়াও
                    এই প্রোফাইলের নীচে।
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <SubscribeForm />

      <Footer />
    </>
  );
}

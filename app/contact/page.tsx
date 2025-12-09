import ContactCard from "@/components/ContactCard";


export default function Page() {
  return (
    <div className="container mx-[122px]">
      <section className="text-center mt-[73px] mb-5 lg:mb-[50px]">
        <h1 className=" font-bold mb-2.5 text-[24px] lg:text-[40px]">Contact Us</h1>
        <p className="text-[#717171] font-medium text-[14px] lg:text-[18px] w-[52%] mx-auto">Any question or remarks? Just write us a message!</p>
      </section>

      <section>
        <ContactCard />
      </section>
    </div>
  )
}
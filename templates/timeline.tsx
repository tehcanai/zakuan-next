import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const StyledTimeline = () => {
    return (
        <Accordion type="single" collapsible className="w-full text-gray-700 font-light text-left">
            <AccordionItem value="item-1">
                <AccordionTrigger>ikhlas.com | October 2023</AccordionTrigger>
                <AccordionContent className="overflow-hidden">
                Joined Ikhlas @ AirAsia as a junior software engineer
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>SANDS Consulting | March 2023</AccordionTrigger>
                <AccordionContent>
                Internship @ SANDS Consulting for 6 months. Developed the MyWakalah App for PPZ MAIWP.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>UPM | 2019 - 2023</AccordionTrigger>
                <AccordionContent>
                Studied Computer Science at Universiti Putra Malaysia, UPM for 4 years. Mainly focused on analytics, databases, and AI/ML
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default StyledTimeline
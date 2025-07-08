
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import Format from "../components/Format";
import { History } from "lucide-react";

export default function Component() {
  return (
    <div>
        <Format heading="timeline" content="timeline of my journey..." icon={<History size={24} className="text-[#55acee]" />} />
        <Timeline className="">
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                <TimelineTime>december 2023</TimelineTime>
                <TimelineTitle>...</TimelineTitle>
                </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                <TimelineTime>november 2023</TimelineTime>
                <TimelineTitle>...</TimelineTitle>
                </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                <TimelineTime>october 2023</TimelineTime>
                <TimelineTitle>...</TimelineTitle>
                </TimelineContent>
            </TimelineItem>
            
            <TimelineItem>
                <TimelinePoint />
                <TimelineContent>
                <TimelineTime>september 2023</TimelineTime>
                <TimelineTitle>started the journey of learning web dev</TimelineTitle>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </div>
  );
}

import { PenTool } from "lucide-react";
import Format from "../components/Format";

export default function Writings() {
    return (
        <div>
            <Format heading="writings" icon={<PenTool size={24} className="text-[#00a63a]" />} content="treat internet as your personal diary" />
        </div>
    )
}
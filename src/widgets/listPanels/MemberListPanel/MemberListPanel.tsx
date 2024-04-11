import { MemberInformation } from "../../../entities/entities";
import { ItemListPanel, Member } from "../../../shared/shared";

interface MemberListPanelProps {
	members: Member[];
}
export function MemberListPanel({ members }: MemberListPanelProps) {
	return (
		<ItemListPanel
			items={members.map((member) => (
				<MemberInformation data={member} />
			))}
		/>
	);
}

import { MemberInformationCopy } from "../../../entities/entities";
import { ItemListPanelCopy, Member } from "../../../shared/shared";

interface MemberListPanelProps {
	members: Member[];
}
export function MemberListPanelCopy({ members }: MemberListPanelProps) {
	return (
		<ItemListPanelCopy
			items={members.map((member) => (
				<MemberInformationCopy data={member} />
			))}
		/>
	);
}

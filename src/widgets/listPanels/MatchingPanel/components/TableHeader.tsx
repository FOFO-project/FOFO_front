import { NoneCondition } from "../../../../shared/shared";

interface TableHeaderProps {
	title: string;
}
export function TableHeader({ title }: TableHeaderProps) {
	return (
		<thead>
			<tr>
				<th className="col bg-black text-light align-middle">
					{title}
				</th>
				<th className={`col bg-black`}>
					<NoneCondition title="이름" />
				</th>
				<th className={`col bg-black`}>
					<NoneCondition title="생년월일" />
				</th>
				<th className={`col bg-black`}>
					<NoneCondition title="주소" />
				</th>
				<th className={`col bg-black`}>
					<NoneCondition title="절대 안되는 부분" />
				</th>
				<th className={`col bg-black`}>
					<NoneCondition title="매칭 상태" />
				</th>
				<th className={`col bg-black`}>
					<NoneCondition title="이름" />
				</th>
				<th className={`col bg-black`}>
					<NoneCondition title="생년월일" />
				</th>
				<th className={`col bg-black`}>
					<NoneCondition title="주소" />
				</th>
				<th className={`col bg-black`}>
					<NoneCondition title="절대 안되는 부분" />
				</th>
			</tr>
		</thead>
	);
}

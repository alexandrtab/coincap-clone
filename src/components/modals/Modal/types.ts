export interface IModalProps {
	active: boolean;
	children: React.ReactNode;
	setActive: (value: boolean) => void;
}

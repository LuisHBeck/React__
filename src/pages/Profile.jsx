import { ChangeProfile } from "../components/ChangeProfile";

export const Profile = (props) => {
	return (
		<div>
			PROFILE: {props.username}{" "}
			<ChangeProfile setUsername={props.username} />
		</div>
	);
};

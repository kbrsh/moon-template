import Moon from "moon";
import view from "view/index";
import "main.css";

Moon.use({
	data: Moon.data.driver,
	view: Moon.view.driver("#root")
});

Moon.run(() => {
	const data = {
		name: "Moon"
	};

	return {
		data,
		view: <view.home data=data/>
	};
});

import Moon from "moon";
import Index from "view/Index";

Moon.use({
	data: Moon.data.driver({
		name: "Moon"
	}),
	view: Moon.view.driver("#root")
});

Moon.run(({ data }) => ({
	view: (<Index data={data}/>)
}));

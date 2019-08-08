import Moon from "moon";
import "./Index.css";

export default ({ data }) => (
	<div class="Index">
		<h1 class="Index-title">{data.name}</h1>
		<p class="Index-paragraph">Jump into the <a href="https://kbrsh.github.io/moon/doc/guide.html">guide</a> to get started.</p>
	</div>
);

import Moon from "moon";
import "./Index.css";

export default ({ data }) => (
	<div class="Index">
		<img class="Index-image" src="/img/moon-logo.png" alt="Moon logo"/>
		<h1 class="Index-title">{data.name}</h1>
		<p class="Index-paragraph">Jump into the <a href="https://kbrsh.github.io/moon/doc/guide.html" target="_blank">guide</a> to get started.</p>
	</div>
);

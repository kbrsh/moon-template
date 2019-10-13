import Moon from "moon";

import "view/Index.css";
import moonLogo from "images/moon-logo.png";

export default ({ data }) => (
	<div class="Index">
		<img class="Index-image" src={moonLogo} alt="Moon logo"/>
		<h1 class="Index-title">{data.name}</h1>
		<p class="Index-paragraph">Jump into the <a href="https://kbrsh.github.io/moon/doc/guide.html" target="_blank">guide</a> to get started.</p>
	</div>
);

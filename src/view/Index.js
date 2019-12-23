import Moon from "moon";
import moonLogo from "images/moon-logo.png";

export default ({ data }) => (
	<div class="p-20 d-y a-m-c a-c-c s-3">
		<img class="w-15 h-15" src={moonLogo} alt="Moon logo"/>
		<h1>{data.name}</h1>
		<p>Jump into the <a href="https://kbrsh.github.io/moon/doc/guide.html" target="_blank">guide</a> to get started.</p>
	</div>
);

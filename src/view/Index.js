import Moon from "moon";
import moonLogo from "images/moon-logo.png";

export default ({ data }) => (
	<div id="root" class="a-x-c p-x-20 p-y-20 m-x-3 m-y-3">
		<img src={moonLogo} alt="Moon logo" class="s-x-15 s-x-15"/>
		<h1>{data.name}</h1>
		<p>Jump into the <a href="https://kbrsh.github.io/moon/doc/guide.html" target="_blank">guide</a> to get started.</p>
	</div>
);

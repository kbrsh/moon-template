import Moon from "moon";
import moonLogo from "images/moon-logo.png";
const { div, img, h1, p, a } = Moon.view.m;

export default ({ data }) =>
	<div id="root" class="a-x-c a-y-l-c">
		<div class="s-x-25 a-x-c m-y-3">
			<img src=moonLogo alt="Moon logo" class="s-x-15 s-y-15"/>
			<h1 class="s-x-25 a-t-c">{data.name}</h1>
			<p class="s-x-25 a-t-c">Jump into the <a href="https://moonjs.org/guide" target="_blank">guide</a> to get started.</p>
		</div>
	</div>;

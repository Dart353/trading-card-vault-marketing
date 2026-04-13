<script lang="ts">
	import ScanLine from '@lucide/svelte/icons/scan-line';
	import Tag from '@lucide/svelte/icons/tag';
	import Warehouse from '@lucide/svelte/icons/warehouse';
	import Store from '@lucide/svelte/icons/store';
	import ClipboardCheck from '@lucide/svelte/icons/clipboard-check';
	import Users from '@lucide/svelte/icons/users';
	import Upload from '@lucide/svelte/icons/upload';
	import SlidersHorizontal from '@lucide/svelte/icons/sliders-horizontal';
	import ChartLine from '@lucide/svelte/icons/chart-line';
	import Camera from '@lucide/svelte/icons/camera';
	import { cn } from '$lib/utils/utils.js';

	type IconKey =
		| 'scan'
		| 'tag'
		| 'warehouse'
		| 'store'
		| 'clipboardCheck'
		| 'users'
		| 'upload'
		| 'sliders'
		| 'chart'
		| 'camera';

	interface FeatureIconProps {
		name: IconKey;
		class?: string;
	}

	const { name, class: className }: FeatureIconProps = $props();

	const iconMap = {
		scan: ScanLine,
		tag: Tag,
		warehouse: Warehouse,
		store: Store,
		clipboardCheck: ClipboardCheck,
		users: Users,
		upload: Upload,
		sliders: SlidersHorizontal,
		chart: ChartLine,
		camera: Camera
	} as const;

	let Icon = $derived(iconMap[name]);
</script>

<span
	class={cn(
		'bg-primary/10 text-primary ring-primary/20 inline-flex size-10 items-center justify-center rounded-xl ring-1',
		className
	)}
>
	<Icon class="size-5" />
</span>

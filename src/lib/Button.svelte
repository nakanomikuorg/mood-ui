<script lang="ts">
	/**
	 * 按钮的类型
	 */
	export let types: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'gradient' =
		'primary';
	export let round: boolean = true;
	/**
	 * 按钮的背景颜色
	 */
	export let backgroundColor: string | undefined = undefined;
	/**
	 * 按钮的背景渐变
	 */
	export let backgroundGradient: string | undefined = undefined;
	/**
	 * 按钮的大小
	 */
	export let size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md';
	/**
	 * 按钮的文本
	 */
	export let label: string = '';

	$: bgColorClass = {
		primary: 'bg-primary',
		secondary: 'bg-secondary',
		tertiary: 'border-solid border border-outline',
		ghost: '',
		danger: 'bg-error',
		gradient: ''
	}[types];
	$: textColorClass = {
		primary: 'text-onPrimary',
		secondary: 'text-onSecondary',
		tertiary: 'text-primary',
		ghost: 'text-primary',
		danger: 'text-onError',
		gradient: 'text-white'
	}[types];
	$: roundedClass = round
		? `rounded-full ${
				{
					sm: 'px-4',
					md: 'px-5',
					lg: 'px-6',
					xl: 'px-7',
					'2xl': 'px-8'
				}[size]
			}`
		: {
				sm: 'rounded-lg px-3.5',
				md: 'rounded-lg px-4',
				lg: 'rounded-[10px] px-[18px]',
				xl: 'rounded-xl px-5',
				'2xl': 'rounded-xl px-7'
			}[size];
	$: sizeClass = {
		sm: 'py-2 text-xs',
		md: 'py-2.5 text-sm',
		lg: 'py-2.5 text-sm',
		xl: 'py-3 text-base',
		'2xl': 'py-4 text-base'
	}[size];
	$: styleClass = `relative ${bgColorClass} ${textColorClass} ${roundedClass} ${sizeClass}`;

	$: bgGradientStyle =
		types == 'gradient'
			? backgroundGradient
				? `background-image: ${backgroundGradient}`
				: 'background-image: var(--gradient)'
			: '';
	$: bgColorstyle = backgroundColor ? `background-color: ${backgroundColor};` : '';
	$: style = `${bgColorstyle} ${bgGradientStyle}`;
</script>

<button class={styleClass} on:click {style} type="button">
	{label}
</button>

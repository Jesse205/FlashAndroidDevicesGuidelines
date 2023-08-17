<script setup lang="ts">

interface Props {
    modelValue?: string
    value?: string
    name?: string
    prependLine?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    prependLine: false
})

const emit = defineEmits<{
    'update:modelValue': [value: string]
}>()

function emitValue(e: Event) {
    let value = (<HTMLInputElement>e.target).value
    // if (props.modelModifiers.capitalize) {
    //     value = value.charAt(0).toUpperCase() + value.slice(1)
    // }
    emit('update:modelValue', value)
}

</script>

<template>
    <div class="VFInput-area">
        <div class="prepend">
            <slot name="prepend"></slot>
        </div>
        <input class="VFInput" :class="{ 'VFInput-prependLine': prependLine }" :value="props.modelValue || value"
            @input="emitValue" :name="props.name" />
    </div>
</template>

<style scoped lang="scss">
.VFInput-area {
    display: inline-flex;
    align-items: center;
    background-color: var(--vp-input-bg-color);
    border: var(--vp-input-border-color) solid 1px;
    height: 40px;
    border-radius: 8px;
    transition: border-color 0.25s;
    margin: 4px;
    color: var(--vp-c-text-1);
}

.VFInput-prependLine {
    border-left: solid 1px;
}

.VFInput {
    height: 100%;
    width: 100%;
    padding: 2px 4px;
    font-size: .875rem;
    border-color: var(--vp-input-border-color);
    transition: border-color 0.25s;
}


.VFInput-area:hover,
.VFInput-area:hover .VFInput {
    border-color: var(--vp-input-hover-border-color);
}

.VFInput-area:focus-within,
.VFInput-area:focus-within .VFInput {
    border-color: var(--vp-c-brand);
}
</style>
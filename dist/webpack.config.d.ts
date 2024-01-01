export let entry: string;
export namespace output {
    let path: string;
    let filename: string;
    let libraryTarget: string;
    let library: string;
}
export let mode: string;
export namespace module {
    let rules: ({
        test: RegExp;
        use: string[];
        exclude?: undefined;
    } | {
        test: RegExp;
        exclude: RegExp;
        use: {
            loader: string;
            options: {
                presets: string[];
                plugins: string[];
            };
        };
    })[];
}
export namespace externals {
    let react: string;
}
export namespace resolve {
    let extensions: string[];
}

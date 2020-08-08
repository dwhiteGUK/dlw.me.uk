exports.data = {
    layout: "base-layout.11ty.js",
};

exports.render = function ({ title, content }) {
    return `
        <div class="w-full md:w-1/2 order-1 md:order-2">
            <div class="max-w-md leading-loose tracking-tight">
                <h1 class="font-bold my-12">${title}</h1>
                ${content}
            </div>
        </div>`;
};
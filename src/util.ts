import React, { ReactNode } from "react";

export function string_to_slug (str) {
    if (typeof str === undefined || "" === str) {
        return ""
    }

    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
  
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}

export const getLabelFromChildren = (children: ReactNode) => {
    let label = '';

    React.Children?.map(children, (child) => {
        if (typeof child === 'string') {
            label += child;
        }
    });

    return label;
};
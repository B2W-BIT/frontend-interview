import React from 'react';

const splitter = (txt, split, elm) => {
	let result = txt.split(split);
	result.splice(1, 0, elm);
	return result;
}

const solveArray = arr => {
	if(typeof arr === 'string' || !arr.length)
		return arr;

	return [].concat.apply([], arr).filter(content => content);

}

const getEntity = (entities, property, list) => {
	let ent = entities[property];

	if(!ent)
		return null;

	if(!ent.length && ent.length !== 0)
		return ent[list];

	return ent;
}

const parseMedia = (content, item, property) => {

	return content.map(c => {
		if(typeof c !== 'string')
			return c;

		let a = c.split(item.url);
		a = a.reduce((result, c) => {
			if(!result.length)
				return [c];

			if(item.type === 'photo')
				result.push(<img className="img-responsive" key={ Math.random() } src={ item.media_url_https } />);
			else
				console.info(item);

			result.push(c);

			return result;
		}, []);

		a = a.filter(c => c);

		return a;
	});

}

const parseUrl = (content, item, property, color) => {
	return content.map(c => {
		if(typeof c !== 'string')
			return c;

		let _from = item[property._from];

		if(property._from === 'screen_name')
			_from = `@${_from}`;

		return c.split(_from).reduce((result, c) => {
			if(!result.length)
				return [c];

			let to = item[property.to],
				style = {};

			if(color)
				style.color = `#${color}`;

			if(property._from === 'screen_name')
				to = `@${to}`;

			result.push(<a href={ `${property._url || ''}${item[property.url]}` } style={ style } key={ Math.random() }>{ to }</a>);
			result.push(c);
			return result;

		}, []).filter(c => c);

	});
};

export default (...params) => {
	let [content, entities, color, ...properties] = params,
		i = 0, ilen = properties.length, j, jlen, k, klen;

	if(!Object.keys(entities).length)
		return content;

	for(i = 0, ilen = properties.length;i < ilen;i++) {
		let property = properties[i],
			list = getEntity(entities, property.src || property, property.list);

		if(!list)
			continue;

		if(property === 'media') {
			for(j = 0, jlen = list.length;j < jlen;j++) {
				content = parseMedia([].concat(solveArray(content)), list[j], property);
			}
		}
		else if(property.url) {
			for(j = 0, jlen = list.length;j < jlen;j++) {
				content = parseUrl([].concat(solveArray(content)), list[j], property, color);
			}
		}
		else {
			console.info(properties, entities, content);
		}
	}

	let x = solveArray(content);

	return x;
}
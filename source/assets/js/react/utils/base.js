export default function bind(...methods) {
  methods.forEach( (method) => this[method] = this[method].bind(this) );
}

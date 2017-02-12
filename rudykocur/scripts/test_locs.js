function(context, args)
{
	var l  = #s.scripts.lib();
	var s = #s.the_holy_checksum.info({navigation:"people", pass:"supercalifragilisticexpialidocious", project: "ESCHATOLOGI.EXE"});
	
	l.log(s[0].call({}));
	
	/*
	for(kx in args) {
		x = args[kx];
		o = #s.scripts.get_level({name:x.name});
		if(o=="4") {
			o = x.call({});
			l.log(o.substr());
		}
	}
	*/
		
	return { ok:false,msg:l.get_log() };
}

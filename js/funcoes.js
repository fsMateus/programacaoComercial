
function minhaFuncao1()
{
	$('#area-01').css({
		color: '#ff0000',
		textTransform: 'uppercase',
		width: '70%'
	});
};

function minhaFuncao2()
{
	$('#area-02').empty();

	var alunos = ['Aluno 01', 'Aluno 02', 'Aluno 03', 'Aluno 04', 'Aluno 05'];

	$.each(alunos, function(index,value){
		$('#area-02').append(value + '->');
	})
}

function minhaFuncao3()
{
	$('#area-02').empty();

	var alunos = [
		{
			nome: 'Mateus',
			idade: 22
		},
		{
			nome: 'Lucas',
			idade: 25
		},
		{
			nome: 'Jorge',
			idade: 19
		},
		{
			nome: 'Samuel',
			idade: 20
		},
		{
			nome: 'Luiz',
			idade: 24
		}
	];

	for(i=0;i<5;i++)
	{
		console.log(alunos[i]);
	}

	var list = $('#area-02').append('<ul></ul>').find('ul');
	$.each(alunos, function(index, value) {
		list.append('<li>' + value.nome + ' - ' + value.idade + '</li>');
	});
};
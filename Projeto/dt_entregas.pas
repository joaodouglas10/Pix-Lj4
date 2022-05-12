unit dt_entregas;

interface

uses
  System.SysUtils, System.Classes, Data.DB, Data.Win.ADODB;

type
  Tdtm_entregas = class(TDataModule)
    conexao: TADOConnection;
    qry_cadcondutor: TADOQuery;
    ds_cadcondutor: TDataSource;
    qry_cadcondutorCONDUTOR: TStringField;
    qry_cadcondutorVEICULO: TStringField;
    qry_cadcondutorPLACA: TStringField;
    ds_moventrega: TDataSource;
    qry_moventrega: TADOQuery;
    qry_moventregaREGISTRO: TIntegerField;
    qry_moventregaCONDUTOR: TStringField;
    qry_moventregaVEICULO: TStringField;
    qry_moventregaPLACA: TStringField;
    qry_moventregaDATA: TDateTimeField;
    qry_moventregaLOJA: TStringField;
    qry_moventregaDESTINO: TStringField;
    qry_moventregaENDERECO: TStringField;
    qry_moventregaBAIRRO: TStringField;
    qry_moventregaKM_INICIAL: TBCDField;
    qry_moventregaKM_FINAL: TBCDField;
    qry_moventregaHORARIO_SAIDA: TWideStringField;
    qry_moventregaHORARIO_CHEGADA: TWideStringField;
    qry_moventregaGERENCIA: TStringField;
    qry_lojas: TADOQuery;
    ds_lojas: TDataSource;
    qry_lojasLOJA_ENTREGA: TStringField;
    qry_cadcondutorID_CONDUTOR: TIntegerField;
    qry_moventregaID_CONDUTOR: TIntegerField;
    qry_gerencia: TADOQuery;
    ds_gerencia: TDataSource;
    qry_gerenciaGERENCIA: TStringField;
    qry_moventregaOBSERVACOES: TMemoField;
    query_ent: TADOQuery;
    qry_vendedor: TADOQuery;
    ds_vendedor: TDataSource;
    qry_vendedorID_VENDEDOR: TIntegerField;
    qry_vendedorNOME: TStringField;
    qry_moventregaVENDEDOR: TStringField;
    qry_moventregaVALOR: TFloatField;
    query_entDESTINO: TStringField;
    query_entENDERECO: TStringField;
    query_entBAIRRO: TStringField;
    query_entVENDEDOR: TStringField;
    query_entVALOR: TFloatField;
    query_entOBSERVACOES: TMemoField;
    qry_moventregaSITUACAO: TStringField;
    query_entSITUACAO: TStringField;
    qry_situacao: TADOQuery;
    qry_situacaoSITUACAO: TStringField;
    ds_situacao: TDataSource;
    qry_realizadas: TADOQuery;
    qry_realizadasREGISTRO: TIntegerField;
    qry_realizadasID_CONDUTOR: TIntegerField;
    qry_realizadasCONDUTOR: TStringField;
    qry_realizadasVEICULO: TStringField;
    qry_realizadasPLACA: TStringField;
    qry_realizadasDATA: TDateTimeField;
    qry_realizadasLOJA: TStringField;
    qry_realizadasDESTINO: TStringField;
    qry_realizadasENDERECO: TStringField;
    qry_realizadasBAIRRO: TStringField;
    qry_realizadasKM_INICIAL: TBCDField;
    qry_realizadasKM_FINAL: TBCDField;
    qry_realizadasHORARIO_SAIDA: TWideStringField;
    qry_realizadasHORARIO_CHEGADA: TWideStringField;
    qry_realizadasGERENCIA: TStringField;
    qry_realizadasOBSERVACOES: TMemoField;
    qry_realizadasVENDEDOR: TStringField;
    qry_realizadasVALOR: TFloatField;
    qry_realizadasSITUACAO: TStringField;
    ds_realizadas: TDataSource;
    qry_moventregaNUMERO: TBCDField;
    qry_realizadasNUMERO: TBCDField;
    query_entNUMERO: TBCDField;
    qry_moventregaPAGAMENTO: TStringField;
    qry_realizadasPAGAMENTO: TStringField;
    query_entLOJA: TStringField;
    query_entPAGAMENTO: TStringField;
    ds_cli: TDataSource;
    query_cli: TADOQuery;
    query_cliID_CLIENTE: TIntegerField;
    query_cliCLIENTE: TStringField;
    query_cliENDERECO: TStringField;
    query_cliNUMERO: TBCDField;
    query_cliBAIRRO: TStringField;
    query_cliCIDADE: TStringField;
    qry_moventregaCODIGO: TIntegerField;
    qry_cadtipo: TADOQuery;
    ds_cadtipo: TDataSource;
    qry_cadtipoTIPO_ENTREGA: TStringField;
    query_entGERENCIA: TStringField;
    qry_realizadasCODIGO: TIntegerField;
    qry_moventregaHORA: TWideStringField;
    qry_realizadasHORA: TWideStringField;
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  dtm_entregas: Tdtm_entregas;

implementation

{%CLASSGROUP 'System.Classes.TPersistent'}

{$R *.dfm}

end.

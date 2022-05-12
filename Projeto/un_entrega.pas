unit un_entrega;

interface

uses
  System.SysUtils, System.Classes, Data.DB, Data.Win.ADODB;

type
  TDtm_Entrega = class(TDataModule)
    Conexao: TADOConnection;
    Qry_CadCondutor: TADOQuery;
    Qry_CadCondutorID_CONDUTOR: TIntegerField;
    Qry_CadCondutorCONDUTOR: TStringField;
    Qry_CadCondutorVEICULO: TStringField;
    Qry_CadCondutorPLACA: TStringField;
    Ds_Condutor: TDataSource;
    Qry_CadTipo: TADOQuery;
    Qry_CadTipoTIPO_ENTREGA: TStringField;
    Ds_CadTipo: TDataSource;
    Qry_Gerencia: TADOQuery;
    Qry_GerenciaGERENCIA: TStringField;
    Ds_Gerencia: TDataSource;
    Qry_Lojas: TADOQuery;
    Qry_LojasLOJA_ENTREGA: TStringField;
    Ds_Lojas: TDataSource;
    Qry_MovEntrega: TADOQuery;
    Qry_MovEntregaREGISTRO: TIntegerField;
    Qry_MovEntregaID_CONDUTOR: TIntegerField;
    Qry_MovEntregaCONDUTOR: TStringField;
    Qry_MovEntregaVEICULO: TStringField;
    Qry_MovEntregaPLACA: TStringField;
    Qry_MovEntregaDATA: TDateTimeField;
    Qry_MovEntregaLOJA: TStringField;
    Qry_MovEntregaDESTINO: TStringField;
    Qry_MovEntregaENDERECO: TStringField;
    Qry_MovEntregaBAIRRO: TStringField;
    Qry_MovEntregaKM_INICIAL: TBCDField;
    Qry_MovEntregaKM_FINAL: TBCDField;
    Qry_MovEntregaHORARIO_SAIDA: TWideStringField;
    Qry_MovEntregaHORARIO_CHEGADA: TWideStringField;
    Qry_MovEntregaGERENCIA: TStringField;
    Qry_MovEntregaOBSERVACOES: TMemoField;
    Qry_MovEntregaVENDEDOR: TStringField;
    Qry_MovEntregaVALOR: TFloatField;
    Qry_MovEntregaSITUACAO: TStringField;
    Qry_MovEntregaNUMERO: TBCDField;
    Qry_MovEntregaPAGAMENTO: TStringField;
    Qry_MovEntregaCODIGO: TIntegerField;
    Qry_MovEntregaHORA: TWideStringField;
    Ds_MovEntrega: TDataSource;
    Qry_Realizadas: TADOQuery;
    Qry_RealizadasREGISTRO: TIntegerField;
    Qry_RealizadasID_CONDUTOR: TIntegerField;
    Qry_RealizadasCONDUTOR: TStringField;
    Qry_RealizadasVEICULO: TStringField;
    Qry_RealizadasPLACA: TStringField;
    Qry_RealizadasDATA: TDateTimeField;
    Qry_RealizadasLOJA: TStringField;
    Qry_RealizadasDESTINO: TStringField;
    Qry_RealizadasENDERECO: TStringField;
    Qry_RealizadasBAIRRO: TStringField;
    Qry_RealizadasKM_INICIAL: TBCDField;
    Qry_RealizadasKM_FINAL: TBCDField;
    Qry_RealizadasHORARIO_SAIDA: TWideStringField;
    Qry_RealizadasHORARIO_CHEGADA: TWideStringField;
    Qry_RealizadasGERENCIA: TStringField;
    Qry_RealizadasOBSERVACOES: TMemoField;
    Qry_RealizadasVENDEDOR: TStringField;
    Qry_RealizadasVALOR: TFloatField;
    Qry_RealizadasSITUACAO: TStringField;
    Qry_RealizadasNUMERO: TBCDField;
    Qry_RealizadasPAGAMENTO: TStringField;
    Qry_RealizadasCODIGO: TIntegerField;
    Qry_RealizadasHORA: TWideStringField;
    Ds_Realizadas: TDataSource;
    Qry_Situacao: TADOQuery;
    Qry_SituacaoSITUACAO: TStringField;
    Ds_Situacao: TDataSource;
    Qry_Vendedor: TADOQuery;
    Qry_VendedorID_VENDEDOR: TIntegerField;
    Qry_VendedorNOME: TStringField;
    Ds_Vendedor: TDataSource;
    Query_Cli: TADOQuery;
    Query_CliID_CLIENTE: TIntegerField;
    Query_CliCLIENTE: TStringField;
    Query_CliENDERECO: TStringField;
    Query_CliNUMERO: TBCDField;
    Query_CliBAIRRO: TStringField;
    Query_CliCIDADE: TStringField;
    Ds_Cli: TDataSource;
    Query_Ent: TADOQuery;
    Query_EntDESTINO: TStringField;
    Query_EntENDERECO: TStringField;
    Query_EntLOJA: TStringField;
    Query_EntPAGAMENTO: TStringField;
    Query_EntNUMERO: TBCDField;
    Query_EntBAIRRO: TStringField;
    Query_EntVENDEDOR: TStringField;
    Query_EntVALOR: TFloatField;
    Query_EntOBSERVACOES: TMemoField;
    Query_EntSITUACAO: TStringField;
    Query_EntGERENCIA: TStringField;
    Tipo_Pag: TADOQuery;
    Tipo_Pagam: TDataSource;
    Tipo_PagPAGAMENTO: TStringField;
    Query_Real: TADOQuery;
    Query_RealDESTINO: TStringField;
    Query_RealVALOR: TFloatField;
    Query_RealPAGAMENTO: TStringField;
    Qry_CadUsu: TADOQuery;
    Ds_CadUsu: TDataSource;
    Qry_CadUsuCOD_USU: TIntegerField;
    Qry_CadUsuUSUARIO: TStringField;
    Qry_CadUsuSENHA: TStringField;
    Qry_CadUsuCONFIRMA: TStringField;
    Qry_CadUsuDATA: TDateTimeField;
    Qry_MovEntregaDATA_ENTREGA: TDateTimeField;
    Qry_RealizadasDATA_ENTREGA: TDateTimeField;
    Qry_PagTransf: TADOQuery;
    Ds_PagTransf: TDataSource;
    Qry_PagTransfREGISTRO: TIntegerField;
    Qry_PagTransfCLIENTE: TStringField;
    Qry_PagTransfVALOR: TFloatField;
    Qry_PagTransfVENDEDOR: TStringField;
    Qry_PagTransfBANCO: TStringField;
    Qry_Banco: TADOQuery;
    Ds_Banco: TDataSource;
    Qry_BancoBANCO: TStringField;
    Query_Comp: TADOQuery;
    Query_CompCLIENTE: TStringField;
    Query_CompVALOR: TFloatField;
    Query_CompDATA: TDateTimeField;
    Query_CompBANCO: TStringField;
    Query_CompVENDEDOR: TStringField;
    Qry_Provisorios: TADOQuery;
    Ds_Provisorios: TDataSource;
    Qry_ProvisoriosPROVISORIO: TIntegerField;
    Qry_ProvisoriosLOJA: TStringField;
    Qry_ProvisoriosVALOR: TFloatField;
    Qry_ProvisoriosEXTENSO: TMemoField;
    Qry_ProvisoriosCOD_CLI: TIntegerField;
    Qry_ProvisoriosNOME_CLI: TStringField;
    Qry_Duplicatas: TADOQuery;
    Ds_Duplicatas: TDataSource;
    Qry_DuplicatasDUPLICATA: TIntegerField;
    Qry_DuplicatasENTRADA: TWideStringField;
    Qry_DuplicatasLOJA: TStringField;
    Qry_DuplicatasVALOR: TFloatField;
    Qry_DuplicatasEXTENSO: TMemoField;
    Qry_DuplicatasVENCIMENTO: TWideStringField;
    Qry_DuplicatasCOD_CLI: TIntegerField;
    Qry_DuplicatasNOME_CLI: TStringField;
    Qry_ProvisoriosENTRADA: TDateTimeField;
    Qry_ProvisoriosVENCIMENTO: TDateTimeField;
    Qry_PagTransfGERENCIA: TStringField;
    Qry_ProvisoriosPRAZO: TIntegerField;
    Qry_ProvisoriosDATA_EXTENSO: TMemoField;
    Qry_Prov: TADOQuery;
    Qry_ProvPROVISORIO: TIntegerField;
    Qry_ProvENTRADA: TDateTimeField;
    Qry_ProvLOJA: TStringField;
    Qry_ProvVALOR: TFloatField;
    Qry_ProvCOD_CLI: TIntegerField;
    Qry_ProvNOME_CLI: TStringField;
    Qry_ProvPRAZO: TIntegerField;
    Qry_ProvVENCIMENTO: TDateTimeField;
    Qry_ProvDATA_EXTENSO: TMemoField;
    Qry_ProvEXTENSO: TMemoField;
    Qry_ProvisoriosTIPO_DOC: TStringField;
    Query_Doc: TADOQuery;
    Ds_CadTipoDoc: TDataSource;
    Query_DocTIPO_DOC: TStringField;
    Qry_ProvTIPO_DOC: TStringField;
    Qry_ProvisoriosGERENCIA: TStringField;
    Qry_ProvGERENCIA: TStringField;
    Qry_ProvisoriosNUMERO_NFE: TIntegerField;
    Qry_ProvNUMERO_NFE: TIntegerField;
    Qry_Trans: TADOQuery;
    Qry_TransREGISTRO: TIntegerField;
    Qry_TransCLIENTE: TStringField;
    Qry_TransDATA: TDateTimeField;
    Qry_TransVALOR: TFloatField;
    Qry_TransVENDEDOR: TStringField;
    Qry_TransBANCO: TStringField;
    Qry_TransGERENCIA: TStringField;
    Qry_PagTransfCAMINHO_FOTO: TStringField;
    Qry_VendedorCAMINHO_FOTO: TStringField;
    Qry_Tipo: TADOQuery;
    Ds_Tipo: TDataSource;
    Qry_TipoCAD_TIPO_PAG: TStringField;
    Qry_PagTransfTIPO_PAG: TStringField;
    Qry_Trasf: TADOQuery;
    Qry_PagTransfDATA: TDateTimeField;
    Qry_PagTransfDATA_PAG: TDateTimeField;
    Qry_TrasfCLIENTE: TStringField;
    Qry_TrasfDATA: TDateTimeField;
    Qry_TrasfDATA_PAG: TDateTimeField;
    Qry_TrasfVALOR: TFloatField;
    Qry_TrasfTIPO_PAG: TStringField;
    Qry_TrasfBANCO: TStringField;
    Qry_TrasfGERENCIA: TStringField;
    Qry_TrasfVENDEDOR: TStringField;
    Qry_PagTransfID_VENDEDOR: TIntegerField;
    Qry_TrasfID_VENDEDOR: TIntegerField;
    Qry_PagTransfSTATUS_IMP: TStringField;
    Qry_reldiario: TADOQuery;
    Qry_reldiarioCLIENTE: TStringField;
    Qry_reldiarioDATA_PAG: TDateTimeField;
    Qry_reldiarioVALOR: TFloatField;
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Dtm_Entrega: TDtm_Entrega;

implementation

{%CLASSGROUP 'Vcl.Controls.TControl'}

{$R *.dfm}

end.
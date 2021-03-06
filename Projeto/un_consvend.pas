unit un_consvend;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Data.DB, Vcl.Buttons, Vcl.Grids,
  Vcl.DBGrids, Vcl.StdCtrls, Vcl.ExtCtrls;

type
  Tfrm_consven = class(TForm)
    Panel1: TPanel;
    Edit1: TEdit;
    DBGrid1: TDBGrid;
    sButton1: TSpeedButton;
    procedure Edit1Change(Sender: TObject);
    procedure DBGrid1CellClick(Column: TColumn);
    procedure FormShow(Sender: TObject);
    procedure sButton1Click(Sender: TObject);
  private
    { Private declarations }
  public
    cod : integer;
    { Public declarations }
  end;

var
  frm_consven: Tfrm_consven;

implementation

{$R *.dfm}

uses un_entrega, un_pagtransf;

procedure Tfrm_consven.DBGrid1CellClick(Column: TColumn);
begin
  Case cod Of
     1:Begin
         Dtm_Entrega.Qry_PagTransfID_VENDEDOR.asstring := Dtm_Entrega.qry_vendedorID_VENDEDOR.asstring;
         Dtm_Entrega.Qry_PagTransfVENDEDOR.asstring := Dtm_Entrega.qry_vendedorNOME.asstring;
         Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.AsString := Dtm_Entrega.Qry_VendedorCAMINHO_FOTO.asstring;
         frm_pagTransf.foto.Picture.LoadFromFile(Dtm_Entrega.Qry_PagTransfCAMINHO_FOTO.asstring);
         frm_consven.Close;
       end;
  end;
end;

procedure Tfrm_consven.Edit1Change(Sender: TObject);
begin
    Dtm_Entrega.qry_vendedor.close;
    Dtm_Entrega.qry_vendedor.Sql.Clear;
    Dtm_Entrega.qry_vendedor.Sql.Add('select * from CAD_VENDEDOR');
    Dtm_Entrega.qry_vendedor.Sql.Add('where NOME like ' + QuotedStr('%' + Edit1.Text + '%'));
    Dtm_Entrega.qry_vendedor.Sql.Add('order by NOME');
    Dtm_Entrega.qry_vendedor.open;
end;

procedure Tfrm_consven.FormShow(Sender: TObject);
begin
   Dtm_Entrega.qry_vendedor.Open;
end;

procedure Tfrm_consven.sButton1Click(Sender: TObject);
begin
   Close;
end;

end.

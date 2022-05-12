
//////////////////////////////////////////////////////////////////////
/**
 *	@file	ENSF.h
 *	@brief	ENSF���C�u�����w�b�_�t�@�C��
 *	@par	Copyright:<BR>
 *			(C)2010,EPSON SOFTWARE DEVELOPMENT LABORATORY, INC.
 *
 *	@par	�X�V����
 *	@li		2010.07.01	Y.Matsuda
 *	<UL>
 *		<LI>�V�K�쐬</LI>
 *	</UL>
 */
//////////////////////////////////////////////////////////////////////

#ifndef __ENSF_H
#define __ENSF_H

//////////////////////////////////////////////////////////////////////
// �C���N���[�h
//////////////////////////////////////////////////////////////////////
#include <windows.h>

//////////////////////////////////////////////////////////////////////
// �萔��`
//////////////////////////////////////////////////////////////////////
//�G���[�R�[�h
#define ENSF_STATUS_SUCCESS				0	//��������
#define ENSF_STATUS_ERROR				-1	//�������s
#define ENSF_STATUS_NOT_SUPPORTED		-2	//���T�|�[�gAPI
#define ENSF_STATUS_PARAMETER_INVALID	-3	//�p�����[�^�s��
#define ENSF_STATUS_BUFFER_MOREREQUIRED	-4	//�o�b�t�@�s��


//////////////////////////////////////////////////////////////////////
// �\���̒�`
//////////////////////////////////////////////////////////////////////
//�P�[�u�����X�ݒ�\����p�\����
typedef struct _ENSF_CAPABILITYINFO 
{
	char*		szSSID;					//�ڑ��ς݂�SSID�i�����ݒ�Ώۂ�SSID�j
	WCHAR*		pwcProfileName;			//�ڑ��ς݂̃v���t�@�C�����i�����ݒ�Ώۂ̃v���t�@�C���j
	bool		bSSIDAlreadyExists;		///< �P�[�u�����X�ݒ�p��SSID�����ɑ��݂��邩�H(true:����, false:���Ȃ�).
}SENSF_CAPABILITYINFO,*PSENSF_CAPABILITYINFO;


//////////////////////////////////////////////////////////////////////
// Windows2000�ȍ~�T�|�[�gAPI
//////////////////////////////////////////////////////////////////////

/**
 *	���C�u�����̃o�[�W�������擾
 *
 *	ENSF���C�u�����̃o�[�W�������擾����
 *
 *	@param	punVersion		�o�[�W�����ԍ��iOUT�j
 *	@return	�������ʂ�Ԃ��B
 *			@li	@c	ENSF_STATUS_SUCCESS				= ��������
 *			@li	@c	ENSF_STATUS_ERROR				= �������s
 *			@li	@c	ENSF_STATUS_NOT_SUPPORTED		= ���T�|�[�gAPI
 *			@li	@c	ENSF_STATUS_PARAMETER_INVALID	= �p�����[�^�s��
 *
 */
int WINAPI GetENSFVersion(unsigned int* punVersion);

/**
 *	�l�b�g���[�NI/F���g�p�ł��邩�𔻒�
 *
 *	���݂̃l�b�g���[�N���ɂ����ăl�b�g���[�NI/F���g�p�ł��邩�𔻒肷��
 *
 *	@param	pbEnabled		�L��=true ����=false�iOUT�j
 *	@return	�������ʂ�Ԃ��B
 *			@li	@c	ENSF_STATUS_SUCCESS				= ��������
 *			@li	@c	ENSF_STATUS_ERROR				= �������s
 *			@li	@c	ENSF_STATUS_NOT_SUPPORTED		= ���T�|�[�gAPI
 *			@li	@c	ENSF_STATUS_PARAMETER_INVALID	= �p�����[�^�s��
 *
 */
int WINAPI GetNICAvailability(bool* pbEnabled);

//////////////////////////////////////////////////////////////////////
// WindowsVista�ȍ~�T�|�[�gAPI
//////////////////////////////////////////////////////////////////////

/**
 *	����LAN�̗L��/������Ԃ��擾
 *
 *	����LAN��NIC�������������ۂ́A1�ł��L���Ȃ��̂��������ꍇ��True�Ƃ���
 *
 *	@param	pbWirelessOn		�����L��=true ����=false�iOUT�j
 *	@return	�������ʂ�Ԃ��B
 *			@li	@c	ENSF_STATUS_SUCCESS				= ��������
 *			@li	@c	ENSF_STATUS_ERROR				= �������s
 *			@li	@c	ENSF_STATUS_NOT_SUPPORTED		= ���T�|�[�gAPI
 *			@li	@c	ENSF_STATUS_PARAMETER_INVALID	= �p�����[�^�s��
 *
 */
int WINAPI GetWirelessLANStatus(bool* pbWirelessOn);

/**
 *	�P�[�u�����X�ݒ肪�\���ǂ����𔻒�
 *
 *	���݂̃l�b�g���[�N���ɂ����ăP�[�u�����X�ݒ肪�\���ǂ����𔻒肷��
 *
 *	@param	pszHwType		�n�[�h�E�F�A�^�C�v�iIN�j
*	@param	pbCablelessSetupEnable		WAC�\=True WAC�s�\=False�iOUT�j
 *	@param	pData			���ʂ��i�[����o�̓o�b�t�@�iOUT�j
 *	@param	punDataSize		�o�̓o�b�t�@�T�C�Y�iIN/OUT�j
 *	@return	�������ʂ�Ԃ��B
 *			@li	@c	ENSF_STATUS_SUCCESS				= ��������
 *			@li	@c	ENSF_STATUS_ERROR				= �������s
 *			@li	@c	ENSF_STATUS_NOT_SUPPORTED		= ���T�|�[�gAPI
 *			@li	@c	ENSF_STATUS_PARAMETER_INVALID	= �p�����[�^�s��
  *			@li	@c	ENSF_STATUS_BUFFER_MOREREQUIRED	=�@�o�b�t�@�s��
 *
 */
int WINAPI GetCablelessSetupCapability(const char* pszHwType,bool* pbCablelessSetupEnable,void* pData,unsigned int* punDataSize);


#endif // __ENSF_H